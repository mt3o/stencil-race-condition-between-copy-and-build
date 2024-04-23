
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-372kixrse8',
  shadow: true,
})
export class C372kixrse8 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  