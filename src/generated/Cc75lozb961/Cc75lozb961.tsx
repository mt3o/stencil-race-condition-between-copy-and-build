
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-c75lozb961',
  shadow: true,
})
export class Cc75lozb961 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  