
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-jhossdpdsa',
  shadow: true,
})
export class Cjhossdpdsa {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  