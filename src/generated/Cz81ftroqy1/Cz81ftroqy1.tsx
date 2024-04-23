
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-z81ftroqy1',
  shadow: true,
})
export class Cz81ftroqy1 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  